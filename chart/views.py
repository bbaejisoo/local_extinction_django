from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView
from .models import Chart
# Create your views here.
'''
def chart_list(request):
    charts = Chart.objects.all()

    return render(request, 'chart/chart_list.html', {'charts':charts})
'''
class ChartListView(ListView):
    model = Chart
    paginate_by = 8
    template_name = 'chart/chart_list.html'

    def get_context_data(self, **kwargs):
        context = super(ChartListView, self).get_context_data(**kwargs)
        paginator = context['paginator']
        page_numbers_range = 5 # 한 페이지에 보여줄 페이지 개수
        max_index = len(paginator.page_range)

        page = self.request.GET.get('page')
        current_pate = int(page) if page else 1

        start_index = int((current_pate -1) / page_numbers_range) * page_numbers_range
        end_index = start_index + page_numbers_range
        if end_index >= max_index:
            end_index = max_index

        page_range = paginator.page_range[start_index:end_index]
        context["page_range"] = page_range

        return context

chart_list = ChartListView.as_view()

def chart_detail(request, id):
    chart = get_object_or_404(Chart, chart_id=id)
    return render(request, 'chart/chart_detail.html',{'chart':chart})