import polyglot

from django.http import HttpResponse

polyglot.eval(path="./react-ssr/dist/bundle.js", language="js")
Render = polyglot.import_value("Render")

def index(request):
    return HttpResponse(Render({"username": "masa"}))