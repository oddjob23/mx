# Generated by Django 3.1 on 2020-08-25 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_auto_20200824_1822'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.CharField(choices=[('HR', 'Hero'), ('SD', 'Side')], default='RG', max_length=2),
        ),
    ]
