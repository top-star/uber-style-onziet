from django.db import models
import os

# Create your models here.

def get_image_path(instance, filename):
	return os.path.join('photos', str(instance.id), filename)
	
class Employee(models.Model):
    """
    An item created by a user.
    """
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=30, blank=True) # validators should be a list
    gender = models.CharField(max_length=10)
    photo = models.CharField(max_length=100)
    driver_license_no = models.CharField(max_length=50)
    #driver_license_photo = ImageField(upload_to=get_image_path, blank=True, null=True)
    driver_license_photo = models.CharField(max_length=100)
    seeking_work_type = models.IntegerField(default=1)
    interest_pos = models.IntegerField(default=1)
    selected_pos = models.IntegerField(default=1)
    employee_resume_profile = models.IntegerField(default=1)

