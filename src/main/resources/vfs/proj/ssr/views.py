import polyglot

from django.http import HttpResponse
from django.template import loader
from django.utils.safestring import mark_safe

polyglot.eval(path="./react-ssr/dist/server-bundle.js", language="js")
Render = polyglot.import_value("Render")

def index(request):
    template = loader.get_template("ssr/index.html")
    username = request.GET.get("user", "masa")
    context = {
        "username": username,
        "ssr_content": mark_safe(Render({"username": username}))
    }

    return HttpResponse(template.render(context, request))