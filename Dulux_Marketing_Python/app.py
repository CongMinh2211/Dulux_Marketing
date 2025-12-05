from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/ideas')
def ideas():
    return render_template('ideas.html')

@app.route('/tool')
def tool():
    return render_template('tool.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/create-post')
def create_post():
    return render_template('create-post.html')

@app.route('/post-detail')
def post_detail():
    return render_template('post-detail.html')

@app.route('/pr')
def pr():
    return render_template('pr.html')

@app.route('/create-pr')
def create_pr():
    return render_template('create-pr.html')

@app.route('/change-password')
def change_password():
    return render_template('change-password.html')

if __name__ == '__main__':
    app.run(debug=True)
