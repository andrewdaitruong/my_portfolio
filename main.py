@app.route('/')
def home():
    return render_template('home.html')

if __file__ == "__main__":
    print("This script is being run directly.")

    