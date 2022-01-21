# Generated by Django 4.0.1 on 2022-01-21 08:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('store', '0004_alter_storelabel_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.SlugField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('item', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Cart item',
                'verbose_name_plural': 'Cart items',
            },
        ),
    ]
