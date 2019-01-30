import json
from rest_framework.views import APIView, Response, status

from abonents.serializers import AbonentsSerializer


from abonents.models import Abonents
from abonents.serializers import AbonentsSerializer


class AbonentsViews(APIView):

    def get(self, *args, **params):
        try:
            if not params.get('id'):
                abonents = Abonents.objects.filter()
                serialized_many_option = {'many': True}
            else:
                abonents = Abonents.objects.get(**params)
                serialized_many_option = {}

            serialized_abonents = AbonentsSerializer(abonents, **serialized_many_option)
            return Response(serialized_abonents.data)
        except Abonents.MultipleObjectsReturned:
            return Response({'attentions': ['Multiple users on this selection']},
                            status=status.HTTP_300_MULTIPLE_CHOICES)
        except Abonents.DoesNotExist:
            return Response({'attentions': ['Abonent not found']},
                            status=status.HTTP_404_NOT_FOUND)

    def post(self, *args, **kwargs):
        # print(self.request.data)
        abonent_info = self.request.data
        try:
            info = {
                'ip': abonent_info.get('ip'),
                'mac': abonent_info.get('mac'),
                'first_name': abonent_info.get('first_name'),
                'second_name': abonent_info.get('second_name'),
                'third_name': abonent_info.get('third_name'),
            }
            abonent = Abonents(**info)
            # abonent.save()
            print(AbonentsSerializer(abonent).data)
            return Response(True)
        except Exception as reason:
            return Response({'errors': reason},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)



