from datetime import datetime, timedelta
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import Product
# Create your views here.

def index(request):
    products = Product.objects.filter(title__contains="slider")
    noviteti = Product.objects.filter(date_added__gte=datetime.today() - timedelta(days=90)).exclude(title__contains="slider")
    print(products)
    return render(request, 'website/home.html', {
        'images': products,
        'noviteti': noviteti
    })

def filter(request):
    if request.method == 'GET':
        filt = request.GET.get('filter', None)
        if filt:
            print(filt)
            images = Product.objects.filter(category="MC", type="RG")
            data = []
            for image in images:
                item = {}
                item['title'] = image.title
                item['image'] = image.image
                data.append(item)

            return JsonResponse(data, safe=False)
