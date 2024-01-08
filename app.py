from flask import Flask,render_template
app=Flask(__name__)
@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/profile')
def profile():
    return render_template("liste.html")

@app.route('/dashboard')
def dash():
    return render_template("dashboard.html")

@app.route('/attendance')
def attendace():
    return render_template("attendance.html")

@app.route('/asheet')
def attendancesheet():
    return render_template("attendancesheet.html")

if __name__=='__main__':
    app.run(debug=True)