from flask import Flask, request, jsonify
from flask_cors import CORS
from question_classifier import QuestionClassifier
from question_parser import QuestionPaser
from answer_search import AnswerSearcher

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')  # 允许来自 http://localhost:3000 的跨域请求

class ChatBotGraph:
    def __init__(self):
        self.classifier = QuestionClassifier()
        self.parser = QuestionPaser()
        self.searcher = AnswerSearcher()

    def chat_main(self, sent):
        answer = '您好，我是小珞，希望可以帮您解决一些心理方面的问题。如果没有得到满意答案，欢迎反馈意见，祝您身体健康，天天开心！'
        res_classify = self.classifier.classify(sent)
        if not res_classify:
            return answer
        res_sql = self.parser.parser_main(res_classify)
        final_answers = self.searcher.search_main(res_sql)
        if not final_answers:
            return answer
        else:
            return '\n'.join(final_answers)

chat_bot = ChatBotGraph()

@app.route('/index', methods=['GET'])
def index():
    res = {}
    sent = request.args.get('sent')
    print("收到的参数为：", sent)  # 添加打印语句来查看收到的参数

    if not sent:
        res['code'] = '5004'
        res['info'] = '请求参数为空'
        return jsonify(res)

    answer = chat_bot.chat_main(sent)
    res['answer'] = answer
    return jsonify(res)

if __name__ == '__main__':
    app.run(port=5001, debug=True)