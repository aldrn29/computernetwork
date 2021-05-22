from blog import consumers

from django.urls import path

websocket_urlpatterns = [
    path('blog', consumers.ChatConsumer),
]