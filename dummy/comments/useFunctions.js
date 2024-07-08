

const useFunctions = () => {
  const addcomment =(tree,commentId,newcomment) => {
    if(tree.id===commentId){
        tree.replies.unshift(newcomment);
        return tree;
    }
    const updatedreplies=tree.replies.map((ele)=>
addcomment(ele,commentId,newcomment));
return {...tree,replies:updatedreplies}
  }
  
    return {addcomment}
}

export default useFunctions
