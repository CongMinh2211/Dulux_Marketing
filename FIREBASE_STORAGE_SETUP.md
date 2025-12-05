# Hướng Dẫn Cấu Hình Firebase Storage

## Vấn Đề: Lỗi CORS khi Upload Ảnh

Nếu bạn gặp lỗi CORS khi upload ảnh, vui lòng làm theo các bước sau:

## Bước 1: Kiểm Tra Firebase Storage Rules

1. Vào [Firebase Console](https://console.firebase.google.com/)
2. Chọn project: **dulux-marketing**
3. Vào **Storage** (bên trái)
4. Click tab **Rules**

## Bước 2: Cấu Hình Rules

### Option 1: Cho phép tất cả (Chỉ dùng cho development/testing)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

### Option 2: Chỉ cho phép user đã đăng nhập (Recommended cho production)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;  // Cho phép đọc công khai
      allow write: if request.auth != null;  // Chỉ cho phép ghi khi đã đăng nhập
    }
  }
}
```

### Option 3: Chỉ cho phép upload vào thư mục post_images (Tốt nhất)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Cho phép đọc công khai
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // Chỉ cho phép upload vào post_images khi đã đăng nhập
    match /post_images/{imageId} {
      allow write: if request.auth != null 
                   && request.resource.size < 5 * 1024 * 1024  // Max 5MB
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

## Bước 3: Publish Rules

1. Sau khi sửa rules, click nút **Publish**
2. Đợi vài giây để rules được áp dụng

## Bước 4: Kiểm Tra Lại

1. Đảm bảo bạn đã **đăng nhập** trong ứng dụng
2. Thử upload file Word lại
3. Kiểm tra Console (F12) để xem còn lỗi không

## Lưu Ý Quan Trọng

- **Option 1** chỉ nên dùng cho development/testing
- **Option 2** và **Option 3** an toàn hơn cho production
- Luôn đảm bảo user đã đăng nhập trước khi upload
- Kiểm tra token authentication không bị hết hạn

## Troubleshooting

### Nếu vẫn còn lỗi CORS:

1. **Clear browser cache** và thử lại
2. **Đăng nhập lại** trong ứng dụng
3. Kiểm tra **Network tab** (F12) để xem request có được gửi không
4. Kiểm tra **Console** (F12) để xem lỗi chi tiết

### Lỗi thường gặp:

- `storage/unauthorized` → Rules chưa cho phép
- `storage/permission-denied` → User chưa đăng nhập hoặc Rules không đúng
- `CORS policy` → Rules chưa được publish hoặc browser cache
- `auth/user-token-expired` → Cần đăng nhập lại

## Liên Hệ

Nếu vẫn gặp vấn đề, vui lòng kiểm tra:
1. Firebase Console → Storage → Rules
2. Firebase Console → Authentication → Users (đảm bảo user tồn tại)
3. Browser Console (F12) → Network tab → Xem request details

