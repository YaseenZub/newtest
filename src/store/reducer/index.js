const INITIAL_STATE={
    users:[
        // {
        //     name:"Kisa",
        //     email: "kisa@gmail.com"
        // },
        // {
        //     name:"Ali",
        //     email:"ali@gmail.com"
        // }
    ]
}

export default (state= INITIAL_STATE, action)=>{
    console.log("Action=>",action)
    switch(action.type){
        case "DATA":
            return ({
                users:[ action.email]
                
            }
            
            )
        default:
            return state
    }
}