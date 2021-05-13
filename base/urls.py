from django.urls import path,include
from base import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    
)
urlpatterns = [
    #products
    path("products",views.Products,name='products'),
    path("products/<str:pk>/",views.GetProducts,name='product'),
    #register
    path('register/', views.registerUser, name='register'),
    path('profile/update/',views.updateUserProfile,name="update-profile"),
    path('user/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/profile/', views.getUserProfile, name="users-profile"),
    path('', views.getUsers, name="users"),
    #orders
    path("add/orders/",views.addOrderItems,name="order_items"),
    path("order/<str:pk>/",views.getOrderById,name="orderby-id"),
    path('order/<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
    path("review/<str:pk>",views.createProductReview,name="createreview"),
]
