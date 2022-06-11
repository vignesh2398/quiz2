const questionModel = require("../models/question")
const getQuestion = async(req,res)=>{
   
try {
    const questions= await questionModel.find({});

    if(questions){
        res.json(questions)
    }
} catch (error) {
  console.log(error)  
}

}
// create question
const createQuestion = async(req,res)=>{
   
    try {
        const questions= new questionModel({
            question:req.body.question,
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            answer:req.body.answer

        })
        const createData=await questions.save();
        if(createData){
            res.send(createData)
        }    
    } catch (error) {
      console.log(error)  
    }
    
    }
  // delete
const deleteQuestion=async(req,res)=>{
    try {
        question=await questionModel.findByIdAndDelete(req.params.id)
        if(question){
            res.send("deleted")
        }
    } catch (error) {
        console.log(error)
    }
}  

// update
const updateQuestion=async(req,res)=>{
    try {
        question=await questionModel.findByIdAndUpdate(req.params.id,req.body)
        if(question){
            res.send(req.body)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={getQuestion,createQuestion,updateQuestion,deleteQuestion}