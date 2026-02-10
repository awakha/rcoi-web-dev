import React, { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextField, Button, Card, CardContent, Typography, Stack } from '@mui/material';

interface MediaItem {
  id: number;
  url: string;
}

interface NewsItem {
  id: number;
  title: string;
  category: string;
  content: string;
  media?: MediaItem[];
  favorite?: boolean;
}

interface NewsFormData {
  title: string;
  category: string;
  content: string;
  mediaIds: number[];
  favorite: boolean;
}

function News() {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  });

  const fetchNews = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/news');

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data: NewsItem[] = await res.json();
      console.log('Полученные новости:', data);
      setNewsList(data);
    } catch (error) {
      console.error('Ошибка при загрузке новостей:', error);
      alert('Ошибка соединения с сервером');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCategory(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const uploadFiles = async (): Promise<number[]> => {
    if (selectedFiles.length === 0) return [];

    const mediaIds: number[] = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/media', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          const text = await res.text();
          console.error('Ответ от сервера:', text);
          throw new Error(`Ошибка при загрузке медиа (${res.status})`);
        }

        const data = await res.json();
        console.log('Загружено медиа:', data);

        if (data.id && typeof data.id === 'number') {
          mediaIds.push(data.id);
        } else {
          console.warn('Некорректный формат ответа сервера:', data);
        }
      } catch (error) {
        console.error('Ошибка загрузки файла', file.name, ':', error);
        alert(
          `Ошибка загрузки файла ${file.name}: ${
            error instanceof Error ? error.message : 'Неизвестная ошибка'
          }`,
        );
      }
    }

    return mediaIds;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!editor) {
      alert('Редактор не инициализирован');
      return;
    }

    setIsLoading(true);

    try {
      const mediaIds = await uploadFiles();

      const newsData: NewsFormData = {
        title,
        category,
        content: editor.getHTML(),
        mediaIds,
        favorite: false,
      };

      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsData),
      });

      if (res.ok) {
        const createdNews: NewsItem = await res.json();
        alert('Новость успешно добавлена');

        setNewsList((prev) => [createdNews, ...prev]);
        setTitle('');
        setCategory('');
        setSelectedFiles([]);
        editor.commands.clearContent();
      } else {
        const errorText = await res.text();
        console.error('Ошибка сервера:', errorText);
        alert('Ошибка при добавлении новости');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      alert('Ошибка соединения с сервером');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNews = async (id: number): Promise<void> => {
    if (!window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      return;
    }

    try {
      const res = await fetch(`/api/news/${id}`, { method: 'DELETE' });

      if (res.ok) {
        alert('Новость удалена');
        setNewsList(newsList.filter((n) => n.id !== id));
      } else {
        alert('Ошибка при удалении новости');
      }
    } catch (error) {
      console.error('Ошибка при удалении:', error);
      alert('Ошибка соединения с сервером');
    }
  };

  return (
    <Stack spacing={4} sx={{ maxWidth: 800, margin: '0 auto', mt: 4, pb: 4 }}>
      {/* Форма добавления новости */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Добавить новость
          </Typography>
          <Stack spacing={2} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Заголовок"
              value={title}
              onChange={handleTitleChange}
              required
              fullWidth
              disabled={isLoading}
            />
            <TextField
              label="Категория"
              value={category}
              onChange={handleCategoryChange}
              required
              fullWidth
              disabled={isLoading}
            />

            {/* Выбор файлов */}
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              disabled={isLoading}
              accept="image/*,.pdf,.doc,.docx"
            />
            {selectedFiles.length > 0 && (
              <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                {selectedFiles.map((file, index) => (
                  <li key={`${file.name}-${index}`}>
                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                  </li>
                ))}
              </ul>
            )}

            {/* TipTap редактор */}
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: 4,
                minHeight: 200,
                padding: 8,
                backgroundColor: '#fff',
              }}>
              {editor && <EditorContent editor={editor} />}
            </div>

            <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
              {isLoading ? 'Добавление...' : 'Добавить новость'}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Список новостей */}
      <Typography variant="h5">Список новостей</Typography>

      {isLoading && newsList.length === 0 ? (
        <Typography>Загрузка новостей...</Typography>
      ) : newsList.length === 0 ? (
        <Typography color="text.secondary">Новости отсутствуют</Typography>
      ) : (
        <Stack spacing={2}>
          {newsList.map((news) => (
            <Card key={news.id}>
              <CardContent>
                <Typography variant="h6">{news.title}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Категория: {news.category}
                </Typography>

                <div
                  dangerouslySetInnerHTML={{ __html: news.content }}
                  style={{
                    marginTop: 8,
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}
                />

                {/* Отображение медиа */}
                {news.media && news.media.length > 0 && (
                  <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap' }}>
                    {news.media.map((m) => (
                      <img
                        key={m.id}
                        src={m.url}
                        alt={`Прикрепленный файл ${m.id}`}
                        style={{
                          maxWidth: 100,
                          maxHeight: 100,
                          borderRadius: 4,
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ))}
                  </Stack>
                )}

                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={() => deleteNews(news.id)}
                  disabled={isLoading}>
                  Удалить
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default News;
