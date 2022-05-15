from program import *

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/public')
def public():
    return render_template('public.html')

start_server()