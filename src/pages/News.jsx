import React, { useState, useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

function News() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  // Получаем новости с сервера
  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      console.log("Полученные новости:", data);
      setNewsList(data);
    } catch (error) {
      console.error(error);
      alert("Ошибка соединения с сервером");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Загрузка файлов на сервер
  const uploadFiles = async () => {
    if (selectedFiles.length === 0) return [];

    const mediaIds = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file); // ключ должен быть "file", как в Swagger

      try {
        const res = await fetch("/api/media", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("Ответ от сервера:", text);
          throw new Error(`Ошибка при загрузке медиа (${res.status})`);
        }

        const data = await res.json();
        console.log("Загружено медиа:", data);
        mediaIds.push(data.id);
      } catch (error) {
        console.error("Ошибка загрузки файла", file.name, ":", error);
        alert(`Ошибка загрузки файла ${file.name}: ${error.message}`);
      }
    }

    return mediaIds;
  };

  // Добавление новости
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mediaIds = await uploadFiles();

    const newsData = {
      title,
      category,
      content: editor.getHTML(),
      mediaIds,
      favorite: false,
    };

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsData),
      });

      if (res.ok) {
        const createdNews = await res.json();
        alert("Новость успешно добавлена ");

        setNewsList((prev) => [createdNews, ...prev]);
        setTitle("");
        setCategory("");
        setSelectedFiles([]);
        editor.commands.clearContent();
      } else {
        alert("Ошибка при добавлении новости ");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка соединения с сервером ");
    }
  };

  // Удаление новости
  const deleteNews = async (id) => {
    try {
      const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("Новость удалена ");
        setNewsList(newsList.filter((n) => n.id !== id));
      } else {
        alert("Ошибка при удалении новости ");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка соединения с сервером ");
    }
  };

  return (
    <Stack spacing={4} sx={{ maxWidth: 800, margin: "0 auto", mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Добавить новость
          </Typography>
          <Stack spacing={2} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Заголовок"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Категория"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              fullWidth
            />

            {/* Выбор файлов */}
            <input
              type="file"
              multiple
              onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
            />
            {selectedFiles.length > 0 && (
              <ul>
                {selectedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            )}

            {/* TipTap редактор */}
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: 4,
                minHeight: 200,
                padding: 8,
              }}
            >
              <EditorContent editor={editor} />
            </div>

            <Button type="submit" variant="contained" color="primary">
              Добавить новость
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Typography variant="h5">Список новостей</Typography>
      <Stack spacing={2}>
        {newsList.length === 0 && <Typography>Новости отсутствуют</Typography>}
        {newsList.map((news) => (
          <Card key={news.id}>
            <CardContent>
              <Typography variant="h6">{news.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Категория: {news.category}
              </Typography>

              <div
                dangerouslySetInnerHTML={{ __html: news.content }}
                style={{ marginTop: 8 }}
              />

              {/* Отображение медиа */}
              {news.media && news.media.length > 0 && (
                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                  {news.media.map((m) => (
                    <img
                      key={m.id}
                      src={m.url}
                      alt="media"
                      style={{ maxWidth: 100, maxHeight: 100, borderRadius: 4 }}
                    />
                  ))}
                </Stack>
              )}

              <Button
                variant="outlined"
                color="error"
                sx={{ mt: 2 }}
                onClick={() => deleteNews(news.id)}
              >
                Удалить
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}

export default News;