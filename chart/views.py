from django.shortcuts import render, get_object_or_404

from .models import Chart
# Create your views here.

def chart_list(request):
    charts = Chart.objects.all()

    return render(request, 'chart/chart_list.html', {'charts':charts})

def chart_detail(request, id):
    chart = get_object_or_404(Chart, chart_id=id)
    return render(request, 'chart/chart_detail.html',{'chart':chart})