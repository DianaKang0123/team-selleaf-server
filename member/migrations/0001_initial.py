# Generated by Django 5.0.2 on 2024-05-21 13:22

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Member",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                (
                    "updated_date",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("member_email", models.CharField(max_length=255)),
                ("member_name", models.CharField(max_length=255)),
                ("member_type", models.TextField(default="selleaf")),
                ("member_status", models.BooleanField(default=False)),
                ("marketing_agree", models.BooleanField(default=False)),
                ("sms_agree", models.BooleanField(default=False)),
                ("admin_type", models.BooleanField(default=False)),
                ("member_knowhow_ai_model", models.TextField(default=None)),
            ],
            options={
                "db_table": "tbl_member",
                "ordering": ["-id"],
            },
        ),
        migrations.CreateModel(
            name="MemberAddress",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                (
                    "updated_date",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("address_zipcode", models.CharField(max_length=60, null=True)),
                ("address_city", models.CharField(max_length=255)),
                ("address_district", models.CharField(max_length=255)),
                ("address_detail", models.CharField(max_length=255, null=True)),
                ("address_name", models.CharField(default="가입 주소", max_length=255)),
                (
                    "member",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT, to="member.member"
                    ),
                ),
            ],
            options={
                "db_table": "tbl_member_address",
            },
        ),
        migrations.CreateModel(
            name="MemberAiFile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                (
                    "updated_date",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("file_name", models.CharField(max_length=255)),
                ("file_path", models.CharField(max_length=255)),
                ("category", models.CharField(max_length=255)),
                (
                    "member",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT, to="member.member"
                    ),
                ),
            ],
            options={
                "db_table": "tbl_ai_file",
            },
        ),
        migrations.CreateModel(
            name="MemberProfile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                (
                    "updated_date",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("file_url", models.ImageField(upload_to="file/%Y/%m/%d")),
                (
                    "member",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT, to="member.member"
                    ),
                ),
            ],
            options={
                "db_table": "tbl_member_profile",
                "ordering": ["-id"],
            },
        ),
    ]
