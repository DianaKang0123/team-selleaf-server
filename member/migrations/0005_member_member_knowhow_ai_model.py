# Generated by Django 5.0.2 on 2024-05-21 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("member", "0004_remove_member_member_knowhow_ai_model"),
    ]

    operations = [
        migrations.AddField(
            model_name="member",
            name="member_knowhow_ai_model",
            field=models.TextField(default=None),
        ),
    ]
