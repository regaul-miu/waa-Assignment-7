import React,{useState} from 'react';
import Posts from '../Posts/Posts';
import PostDetail from '../../components/PostDetail/PostDetail';
import './Dashboard.css';

const Dashboard = ()=>{
  const [posts, setPosts] = useState([
    { id: 111, title: 'Happiness', author: 'John'},
    { id: 112, title: 'MIU', author: 'Dean'},
    { id: 113, title: 'Enjoy Life', author: 'Jasmine'},
]);
const[selectedState, setSelectedState] = useState(111);
const setSelected = (id)=>{
  setSelectedState(id);
};

const btnChangeTitleHandler = ()=>{
  const post = posts.find(p=>p.id === 111);
  post.title = document.getElementById('postTitle').value;
  const copyPosts = [...posts];
  setPosts(copyPosts);
};

return(
  <div className='dashboard'>
    <Posts posts = {posts} setSelected = {setSelected}></Posts>
    <div className='title-change'>
      <input id='postTitle'></input>
      <button id='btnChangeTitle' onClick={btnChangeTitleHandler}>Change Post Title</button>
    </div>
    <PostDetail data={posts.find(p=>p.id === selectedState)}/>
    
  </div>
);
};

export default Dashboard;