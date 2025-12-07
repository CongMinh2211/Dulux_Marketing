from flask import Flask, render_template, url_for

# Khởi tạo ứng dụng Flask
app = Flask(__name__)

# Route cho trang chủ
@app.route('/')
def home():
    # Render template index.html (Trang chủ)
    return render_template('index.html')

# Route cho trang tin tức
@app.route('/news')
def news():
    # Render template news.html (Trang tin tức)
    return render_template('news.html')

# Route cho trang cộng đồng
@app.route('/community')
def community():
    # Render template community.html (Trang cộng đồng)
    return render_template('community.html')

# Route cho trang sản phẩm
@app.route('/products')
def products():
    # Render template products.html (Trang danh sách sản phẩm)
    return render_template('products.html')

# Route cho trang giới thiệu
@app.route('/about')
def about():
    # Render template about.html (Trang giới thiệu về Dulux)
    return render_template('about.html')

# Route cho trang liên hệ
@app.route('/contact')
def contact():
    # Render template contact.html (Trang liên hệ)
    return render_template('contact.html')

# Route cho trang ý tưởng
@app.route('/ideas')
def ideas():
    # Render template ideas.html (Trang ý tưởng trang trí)
    return render_template('ideas.html')

# Route cho trang công cụ (Visualizer, tính sơn...)
@app.route('/tool')
def tool():
    # Render template tool.html (Trang công cụ hỗ trợ)
    return render_template('tool.html')

# Route cho trang Showroom 360
@app.route('/showroom')
def showroom():
    # Render template showroom.html
    return render_template('showroom.html')

# Route cho trang đăng nhập
@app.route('/login')
def login():
    # Render template login.html (Trang đăng nhập/đăng ký)
    return render_template('login.html')

# Route cho trang tạo bài viết mới (Cộng đồng)
@app.route('/create-post')
def create_post():
    # Render template create-post.html (Trang tạo bài viết)
    return render_template('create-post.html')

# Route cho trang chi tiết bài viết (Cộng đồng)
@app.route('/post-detail')
def post_detail():
    # Render template post-detail.html (Trang chi tiết bài viết)
    return render_template('post-detail.html')

# Route động cho chi tiết bài viết với slug (SEO friendly URL)
@app.route('/bai-viet/<path:post_path>')
def post_detail_slug(post_path):
    # Trích xuất ID từ cuối URL (định dạng slug-id)
    # Giả sử ID là phần cuối cùng sau dấu gạch ngang cuối cùng
    try:
        post_id = post_path.split('-')[-1]
    except IndexError:
        post_id = None
    # Render template post-detail.html và truyền post_id vào
    return render_template('post-detail.html', post_id=post_id)

# Route cho trang PR Online (Danh sách tin PR)
@app.route('/pr')
def pr():
    # Render template pr.html (Trang danh sách PR)
    return render_template('pr.html')

# Route cho trang tạo tin PR mới
@app.route('/create-pr')
def create_pr():
    # Render template create-pr.html (Trang tạo/sửa tin PR)
    return render_template('create-pr.html')

# Route cho trang đổi mật khẩu
@app.route('/change-password')
def change_password():
    # Render template change-password.html (Trang đổi mật khẩu)
    return render_template('change-password.html')

# Route cho trang hồ sơ cá nhân
@app.route('/profile')
def profile():
    # Render template profile.html (Trang thông tin cá nhân)
    return render_template('profile.html')

# Chạy ứng dụng nếu file được chạy trực tiếp
if __name__ == '__main__':
    # Bật chế độ debug để tự động reload khi sửa code và hiển thị lỗi chi tiết
    app.run(debug=True)
