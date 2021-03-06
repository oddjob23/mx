from django.contrib import admin
from .models import Product, Season, Collection
# Register your models here.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'season', 'date_added', 'image', 'category', 'type')
    list_filter  = ('season',  'type', 'date_added', 'category')
  
admin.site.register(Season)

admin.site.register(Collection)
