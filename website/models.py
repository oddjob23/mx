from django.db import models

# Create your models here.

class Season(models.Model):
    title = models.CharField(max_length=30)
    def __str__(self):
        return self.title
class Product(models.Model):
    title = models.CharField(max_length=255)
    JESEN = 'JS'
    LETO  = 'LT'
    ZIMA  = 'ZI'
    PROLECE = 'PR'

    KOSULJE = 'KS'
    MAJICE  = 'MC'
    PANTALONE = 'PT'
    JAKNE = 'JK'
    SORTSEVI = 'ST'
    AKSESOARI = 'AK'

    KATEGORIJE = [
        (KOSULJE, 'Kosulje'),
        (SORTSEVI, 'Sortsevi'),
        (MAJICE, 'Majice'),
        (JAKNE, 'Jakne'),
        (PANTALONE, 'Pantalone'),
        (AKSESOARI, 'Aksesoari')
    ]

    HERO = 'HR'
    SIDE = 'SD'
    REGULAR = 'RG'
    TYPES = [
        (HERO, 'Hero'),
        (SIDE, 'Side'),
        (REGULAR, 'Regular')
    ]
    SEZONA = [
        (ZIMA, 'Zima'),
        (PROLECE, 'Prolece'),
        (LETO, 'Leto'),
        (JESEN, 'Jesen'),
    ]
    season = models.CharField(max_length=2, choices=SEZONA, default=LETO)

    category = models.CharField(max_length=2, choices=KATEGORIJE, default=MAJICE)
    
    # size choice field
    # color choice field
    image = models.ImageField()
    # url
    # quantaty
    type = models.CharField(max_length=2, choices=TYPES, default=REGULAR)
    date_added = models.DateTimeField(auto_now_add=True, null=True)
    def __str__(self):
        return self.title
    

class Collection(models.Model):
    title = models.CharField(max_length=80)
    year = models.DateField()
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    def __str__(self):
        return self.title