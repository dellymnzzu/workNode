async function getUser() { // 로딩 시 사용자 가져오는 함수
    try {
      const res = await axios.get('/users');  // users를 부른다.매핑된 곳으로 간다. (서버로 간다.)
      const users = res.data;  // 데이터를 빼낸다. 
      const list = document.getElementById('list');  // 문서에서 아이디를 뺐다. 
      list.innerHTML = '';  // 원래 있던거 초기화화
      // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
      Object.keys(users).map(function (key) { // 유저를 등록할 때 map 형식으로 간다. key에는 name(key)이 들어가는데 시간으로 들어간다. 
        const userDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = users[key];  // 정확히는 시간을 들어갔다. 그럼 값이 나오게 된다. (key를 넣었기 때문에에)
        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => { // 수정 버튼 클릭
          const name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          try {
            await axios.put('/user/' + key, { name });
            getUser();  // 바뀐 내용이 바로 업데이트 되게 확인 했다. 
          } catch (err) {
            console.error(err);
          }
        });
        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => { // 삭제 버튼 클릭
          try {
            await axios.delete('/user/' + key);
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }  // getUser가 하는 일 
  }
  
  window.onload = getUser; // 화면 로딩 시 무조건건 getUser 호출
  // 폼 제출(submit) 시 실행
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();  // 여러번 클릭하게 되면 한번만 인식하고 무시한다. 
    const name = e.target.username.value; // 클릭된 username의 값을 저장하였다. 
    if (!name) {
      return alert('이름을 입력하세요');
    }
    try {
      await axios.post('/user', { name });
      getUser();  // 글자 나오게 하는 작업을 하기 위해 getUser를 불렀다. 
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';  // 저장이 됐으니까 아까 넣은 이름을 초기화시킨다.
  });