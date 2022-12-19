import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'


const shuffleArray = (array)=>{
  for (let i = array.length-1; i>0; i--){
    const j  =  Math.floor(Math.random() * [i+1]);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [no, setNo] = useState(1);
  const [options, setOPtions] = useState([])
  const getQuiz = async()=>{
    const url = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986';
      const response = await fetch(url)
      const data = await response.json();

      // console.log(data.result)
      setQuestions(data.results);
      setOPtions(generateOptionsAndShuffle(data.results[0]));
  } 
  useEffect(()=>{
        getQuiz()
  },[])

  const handleNextPress = () =>{
    setQues(ques+1)
    setNo(no+1)
  }

  const generateOptionsAndShuffle = (_question) =>{
       const options = [..._question.incorrect_answer]
       options.push(..._question.correct_answer)
      //  console.log(options)
      shuffleArray(options)
      // console.log(options)

      return options
  }
  
  return (

    <View style={styles.container} >
     {questions &&
     (
      <View style={styles.container} >
       <View style={styles.top}>
        <Text style={styles.question}>Q{no}. { decodeURIComponent(questions[ques].question)}</Text>
      </View>
     <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} >
            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity >
     </View>
     <View style={styles.bottoms}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>SKIP</Text>
        </TouchableOpacity>
        {ques !== 9 &&  <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.btntext}>Next</Text>
        </TouchableOpacity>}
       
        { ques === 9 && <TouchableOpacity style={styles.button} >
            <Text style={styles.btntext}>Submit the Quiz</Text>
        </TouchableOpacity> }
     </View>
    </View>
      
)}
     </View>
     
  )
}

export default  Quiz

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:'100%',
      },
      top:{
        marginVertical: 16,
      },
      options:{
        marginVertical: 16,
        flex:1,
      },

      bottoms:{
         marginBottom: 12,
         paddingVertical:16,
         justifyContent: 'space-between',
         flexDirection: 'row'
      },
      button:{
        backgroundColor:'#1A759F',
        padding:12,
        paddingHorizontal:20,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30,
      },
      btntext:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
    },
    question:{
      fontSize:28,

    },
    option:{
      fontSize:18,
      fontWeight:'500',
      color:'white'
    },
    optionButton:{
      paddingVertical:12,
      marginVertical:6,
      backgroundColor:"#34A0A4",
      paddingHorizontal:12,
      borderRadius:12
    }
})