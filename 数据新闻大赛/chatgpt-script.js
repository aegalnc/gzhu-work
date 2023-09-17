// 获得DOM元素
const chatgpt_message_1_p = document.getElementById("chatgpt-message-1");
const user_message_1_p = document.getElementById("user-message-1");
const user_message_container_1 = document.getElementById("user-message-container-1");
const chatgpt_message_container_1 = document.getElementById("chatgpt-message-container-1");
const input_message_p = document.getElementsByClassName("input-message")[0];
const chat_messages = document.getElementsByClassName("chat-messages")[0];
const cursor = document.getElementsByClassName("cursor")[0];
const send_button = document.getElementsByClassName("send-button")[0];

// 为message_array赋值
const chatgpt_message_1 = "你好，实习是提升你就业竞争力的一个很重要的手段，我建议你尽快找一些实习".split('');
const user_message_1 = "我想问问，我身边的同学都已经手握几段实习经历了，加上现在就业形势如此严峻，我还没有实习过？".split('');
const user_message_2 = "但是我没有实习经历，想进大厂的话不是要实习背景吗？";
const chatgpt_message_2 = "我这边建议你采取“”。";
const title = "付费实习";
const user_messages = {
    "user_message_1":            "hhhhhhhhhhh\nhhhhhhhhhhhhh\nhhhhhhhhhhhh\nhhhhhhhhhhhhh\nhhhhhhhhhhhhhhhhhhhhhhhh"
    .split(''),
    'user_message_1_1': "heiheiheiehie".split('')
}
console.log(user_messages.user_message_1 + '_1');




// 逐字渲染消息
function render_message(message_p, message) {
    let i = 0;
  
    
    return new Promise((resolve) => {
      function intervalCallback() {
        if (i < message.length) {
          message_p.innerHTML += message[i];
          i++;
          if (message === chatgpt_message_2 && (message.length - i) === 2) {
            const span = document.createElement("span");
            message_p.appendChild(span);
            span.classList.add("title");
            for (let j = 0; j < title.length; j++) {
              span.innerHTML += title[j];
            }
          }
        } else {
          clearInterval(intervalId);
          resolve();
        }
      }
    
      const intervalId = setInterval(intervalCallback, 100); 
    });
  }

  // 用户输入
  function input_message(user_message) {
    
    input_message_p.innerHTML = '';
    return render_message(input_message_p, user_message);
  }
  
  // chatgpt回复
  function chatgpt_reply(chatgpt_message) {
    const chatgpt_message_container = document.createElement('div');
    chat_messages.appendChild(chatgpt_message_container);
    chatgpt_message_container.classList.add('chatgpt-message-container');
  
    const chatgpt_message_p = document.createElement('p');
    chatgpt_message_container.appendChild(chatgpt_message_p);
    chatgpt_message_p.classList.add('chatgpt-message');
  
    const chatgpt_avator = document.createElement('img');
    chatgpt_message_container.appendChild(chatgpt_avator);
    chatgpt_avator.classList.add('chatgpt-avatar');
    chatgpt_avator.src = "chatgpt.png";

    if (chatgpt_message === chatgpt_message_2) {
      const span = document.createElement("span");
      chatgpt_message_p.appendChild(span);
      span.classList.add('title');
    }
  
    return render_message(chatgpt_message_p, chatgpt_message);
  }
  
  // 提交input_message
  function submit_input_message(user_message) {
    // 清空input_message
    input_message_p.innerHTML = '';
    // 添加user-message
    const user_message_container = document.createElement('div');
    chat_messages.appendChild(user_message_container);
    user_message_container.classList.add('user-message-container');
  
    const user_message_p = document.createElement('p');
    user_message_container.appendChild(user_message_p);
    user_message_p.classList.add('user-message');
    for (let i = 0; i < user_message.length; i++) {
      user_message_p.innerHTML += user_message[i];
    }
    
  
    const user_avator = document.createElement('img');
    user_message_container.appendChild(user_avator);
    user_avator.classList.add('user-avatar');
    user_avator.src = "user-avatar.png";

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100)
    })
  }


// 鼠标移动的回调函数
cursor.addEventListener("animationend", () => {
  input_message(user_message_1)
  .then(() => 
    send_button.classList.add("flash")
  )
})
// 
send_button.addEventListener("animationend", () => {
  submit_input_message(user_message_1)
  .then(() => chatgpt_reply(chatgpt_message_1))
  .then(() => input_message(user_message_2))
  .then(() => submit_input_message(user_message_2))
  .then(() => chatgpt_reply(chatgpt_message_2))
  .then(() => {
    const span = document.getElementsByClassName("title")[0];
    span.classList.add("magnify");
  })
})

// map覆盖
/*function map_cover() {
  const map = document.getElementsByClassName("map")[0];
  window.addEventListener("scroll", () => {
    const new_top = Math.max(0, (3 * window.innerHeight - scrollY))
    map.style.top = new_top + 'px';
    console.log(scrollY);
  })
}
map_cover();*/

// 下滑一个窗口

const button = document.querySelectorAll(".scroll");
button.addEventListener("click", () => {
  function intervalCallback() {
    if (window.scrollY <= window.innerHeight) {
      window.scrollBy(0, 10);
      console.log(scrollY);
    } else {
      clearInterval(scrollViewportDown);
      console.log("clear");
    }
  }
  const scrollViewportDown = setInterval(intervalCallback, 1)
  console.log("1");
})
  

  
 





