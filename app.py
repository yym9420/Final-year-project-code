from flask import Flask, request, jsonify
from question_classifier import QuestionClassifier
from question_parser import QuestionPaser
from answer_search import AnswerSearcher

app = Flask(__name__)
classifier = QuestionClassifier()
parser = QuestionPaser()
searcher = AnswerSearcher()

@app.route('/chat', methods=['POST'])
def chat():
    # 获取前端发送的问题
    question = request.json.get('question')

    # 使用分类器、解析器和搜索器处理问题并获取回答
    res_classify = classifier.classify(question)
    res_sql = parser.parser_main(res_classify)
    final_answers = searcher.search_main(res_sql)

    # 返回回答给前端
    answer = '\n'.join(final_answers) if final_answers else '您好，我是小勇医药智能助理，希望可以帮到您。如果没答上来，可联系https://liuhuanyong.github.io/。祝您身体棒棒！'
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)