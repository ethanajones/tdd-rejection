const addQuestion = ({
  question,
  askee,
  status
} = {}) => ({
  type: 'rejection/addQuestion',
  payload: {
    question,
    askee,
    status
  }
});

const reducer = ( 
  state = [],
  {type, payload} = {}
  ) => {
    switch(type){
      case addQuestion().type: return [...state, payload];
      default: return state;
    }
  };

const getScore = state => state.reduce((score,question) => 
    question.status==='Accepted'?score+1 : question.status ==='Rejected' ? score + 10:
    score
    ,0);


export {reducer, addQuestion, getScore};