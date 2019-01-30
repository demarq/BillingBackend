from django.urls import path
from django.views.generic import TemplateView
import os

print(os.getcwd())

urlpatterns = [
    path('', TemplateView.as_view(template_name='templates/index.html')),
]
