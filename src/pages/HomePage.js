import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [dialogueInput, setDialogueInput] = useState('');
  const [dialogueHistory, setDialogueHistory] = useState([]);
  const [dialogueHintVisible, setDialogueHintVisible] = useState(false);
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [loading, setLoading] = useState(false); // 添加加载状态

  const getServiceText = (data) => {
    if (data && data.robot && Array.isArray(data.robot.dialogue)) {
      const serviceText = data.robot.dialogue;
      const i = Math.floor(Math.random() * serviceText.length);
      const newText = serviceText[i];
      setDialogueHistory(prevHistory => [...prevHistory, newText]);
    } else {
      console.error("Invalid data structure:", data);
    }
  };

  useEffect(() => {
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (dialogueInput.trim() === '') {
          setDialogueHintVisible(true);
        } else {
          setDialogueHintVisible(false);
          setLoading(true); // 开始加载数据
          try {
            const response = await axios.get('http://127.0.0.1:5001/index', {
              params: { sent: dialogueInput }
            });
            const data = response.data;
            getServiceText(data);
          } catch (error) {
            console.error('获取数据时出错:', error);
            // 处理错误，例如显示错误提示给用户
          } finally {
            setLoading(false); // 加载结束
          }
        }
      }
    };

    const openButton = document.getElementById('btn_open');
    const closeButton = document.getElementById('btn_close');
    const inputElement = document.getElementById('dialogue_input');

    if (openButton) {
      openButton.addEventListener('click', () => setDialogueOpen(true));
    }

    if (closeButton) {
      closeButton.addEventListener('click', () => setDialogueOpen(false));
    }

    if (inputElement) {
      inputElement.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (openButton) {
        openButton.removeEventListener('click', () => setDialogueOpen(true));
      }
      
      if (closeButton) {
        closeButton.removeEventListener('click', () => setDialogueOpen(false));
      }

      if (inputElement) {
        inputElement.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [dialogueInput]);

  const handleSubmit = async () => {
    if (dialogueInput.trim() === '') {
      setDialogueHintVisible(true);
      return;
    }
    setDialogueHintVisible(false);
    setLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:5001/index', {
        params: { sent: dialogueInput }
      });
      const data = response.data;
      getServiceText(data);
    } catch (error) {
      console.error('获取数据时出错:', error);
      // 处理错误，例如显示错误提示给用户
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, STHeiTi, sans-serif" }}>
      {/* 对话支持按钮 */}
      <div
        id="btn_open"
        style={{
          position: 'fixed',
          display: 'inline-block',
          top: '50%',
          right: 0,
          marginTop: '-70px',
          padding: '10px 0',
          width: '40px',
          height: '120px',
          fontSize: '16px',
          fontWeight: 500,
          textAlign: 'center',
          cursor: 'pointer',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
          boxShadow: '-1px 1px 5px rgba(0, 0, 0, .4)',
          backgroundColor: '#5d94f3',
        }}
      >
        <i
          className="dialogue-support-icon"
          style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '-2px',
            width: '20px',
            height: '16px',
            borderRadius: '4px',
            backgroundColor: '#fff',
          }}
        ></i>
        <i
          className="dialogue-support-line"
          style={{ display: 'inline-block', width: '100%', height: '1px', backgroundColor: '#ddd' }}
        ></i>
        <span
          className="dialogue-support-text"
          style={{
            padding: '5px 0',
            letterSpacing: '4px',
            writingMode: 'vertical-rl',
            WebkitUserSelect: 'none',
          }}
        >
          打开问答
        </span>
      </div>

      {/* 对话主体 */}
      <div
        className="dialogue-main"
        style={{
          position: 'fixed',
          display: dialogueOpen ? 'inline-block' : 'none',
          right: '100px',
          bottom: '10px',
          width: '400px',
          height: '600px',
          borderRadius: '4px',
          boxShadow: '0 0 5px rgba(0, 0, 0, .4)',
        }}
      >
        {/* 对话头部 */}
        <div
          className="dialogue-header"
          style={{
            position: 'relative',
            padding: '10px',
            height: '80px',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
            boxShadow: '0 0 5px rgba(0, 0, 0, .2)',
            backgroundColor: '#5d94f3',
          }}
        >
          <i
            id="btn_close"
            className="dialogue-close"
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              padding: '2px',
              fontSize: '22px',
              transform: 'rotate(90deg)',
              cursor: 'pointer',
            }}
          >
            {'>'}
          </i>
          <div
            className="dialogue-service-info"
            style={{
              position: 'relative',
              top: '50%',
              marginTop: '-20px',
              height: '40px',
            }}
          >
            <i
              className="dialogue-service-img"
              style={{
                display: 'inline-block',
                margin: '0 10px 0 20px',
                width: '40px',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
                verticalAlign: 'middle',
                color: '#000',
                borderRadius: '50%',
                boxShadow: '1px 1px 4px rgba(0, 0, 0, .2)',
                backgroundColor: '#fff',
              }}
            ></i>
            <div
              className="dialogue-service-title"
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >
              <p className="dialogue-service-name">问答机器人</p>
              <p className="dialogue-service-detail">心理咨询问答机器人</p>
            </div>
          </div>
        </div>

        {/* 对话内容 */}
        <div
          className="dialogue-contain"
          style={{
            overflowY: 'auto',
            padding: '10px',
            height: '380px',
            wordWrap: 'break-word',
            backgroundColor: '#f9f9f9',
          }}
        >
          {dialogueHistory.map((text, index) => (
            <p
              key={index}
              className="dialogue-service-contain"
              style={{ marginBottom: '10px', textAlign: 'left' }}
            >
              <span
                className="dialogue-text dialogue-service-text"
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  padding: '10px',
                  maxWidth: '120px',
                  whiteSpace: 'pre-wrap',
                  border: '1px solid #09d07d',
                  borderRadius: '4px',
                  backgroundColor: '#09d07d',
                  boxSizing: 'border-box',
                  marginLeft: '20px',
                }}
              >
                {text}
              </span>
            </p>
          ))}
        </div>

        {/* 对话提交 */}
        <div
          className="dialogue-submit"
          style={{
            position: 'relative',
            padding: '10px',
            height: '100px',
            color: '#000',
            wordWrap: 'break-word',
            borderTop: '1px solid #ddd',
            boxSizing: 'border-box',
          }}
        >
          <p
            id="dialogue_hint"
            className={`dialogue-hint ${dialogueHintVisible ? 'visible' : ''}`}
            style={{
              position: 'absolute',
              top: '-15px',
              left: '20px',
              padding: '2px',
              width: '140px',
              height: '18px',
              opacity: '0',
              fontSize: '12px',
              textAlign: 'center',
              lineHeight: '18px',
              border: '1px solid #ddd',
              boxShadow: '1px 1px 4px rgba(0, 0, 0, .4)',
              backgroundColor: '#fff',
            }}
          >
            <span
              className="dialogue-hint-icon"
              style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                marginRight: '5px',
                fontSize: '14px',
                fontStyle: 'italic',
                fontWeight: 700,
                verticalAlign: 'middle',
                lineHeight: '18px',
                color: '#fff',
                borderRadius: '50%',
                backgroundColor: '#5d94f3',
              }}
            >
              !
            </span>
            <span className="dialogue-hint-text" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              发送内容不能为空
            </span>
          </p>
          <textarea
            id="dialogue_input"
            className="dialogue-input-text"
            style={{
              overflowY: 'auto',
              display: 'inline-block',
              padding: '5px 10px',
              width: '295px',
              height: '70px',
              verticalAlign: 'middle',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              resize: 'none',
              borderRight: '1px solid #ddd',
              boxSizing: 'border-box',
            }}
            placeholder="请输入您的问题，按Enter键提交（shift+Enter换行）"
            value={dialogueInput}
            onChange={(e) => setDialogueInput(e.target.value)}
          ></textarea>
          <div style={{ display: 'inline-block', width: '80px', height: '80px', verticalAlign: 'middle' }}>
            <button onClick={handleSubmit}>提交</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;