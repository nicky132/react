
import styles from './goods.css';
import {connect} from 'dva';
import {useEffect} from 'react';
export default connect(
  state => ({
    goodsList:state.goods,
    loading:state.loading
  }), //命名空间
  {
    addGood:title => ({
      type:'goods/addGood',
      payload:title
    }),
    getList:() => ({
      type:'goods/getList'
    })
  }
)(function({goodsList,addGood,getList,loading}) {
  console.log(goodsList);
  //因为是函数型组件要用副作用
  useEffect(()=>{
    getList();
  },[])

  //加载中的提示
  console.log(loading);
  if(loading.models.goods){
    return <div>加载中...</div>
  }

  return (
    <div className={styles.normal}>
      <h1>Page goods</h1>
      <ul>
        {goodsList.map(good => <li key={good.title}>{good.title}</li>)}
      </ul>
      <button onClick={()=>addGood('商品'+new Date().getTime())}>新增</button>
    </div>
  );
})
