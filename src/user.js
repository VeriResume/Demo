export const USER =
    [
        {
            id: 0,
            name:'Education',
            experiences: [
                {
                    eid: 0,
                    place: "Georgia Institute of Technology",
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "GPA",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Graduation Date",
                            public: false ,
                            verified: "email" 
                        } ,
                        {
                            elemID: 2,
                            tag: "Honors Porgram",
                            public: false ,
                            verified: "email" 
                        } ,
                        {
                            elemID: 3,
                            tag: "Scholarship",
                            public: false ,
                            verified: "email" 
                        } 
                    ] 
                }
            ]
        },
        {
            id: 1,
            name:'Work Experience',
            experiences: [

                {
                    eid: 0,
                    place: "Google" ,
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "Position",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Dates",
                            public: false ,
                            verified: "pdf" 
                        } ,
                        {
                            elemID: 2,
                            tag: "Impact",
                            public: false ,
                            verified: "email" 
                        } 
                    ]
                },
                {
                    eid: 1,
                    place: "Georgia Institute of Technology",
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "Position",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Dates",
                            public: false ,
                            verified: "pdf" 
                        } ,
                        {
                            elemID: 2,
                            tag: "Impact",
                            public: true ,
                            verified: "email" 
                        } 
                    ]
                },
                {
                    eid: 2,
                    place: "Carnegie Mellon University",
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "Position",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Dates",
                            public: false ,
                            verified: "pdf" 
                        } ,
                        {
                            elemID: 2,
                            tag: "Impact",
                            public: true ,
                            verified: "email" 
                        } 
                    ]
                }
            ]
        },
        {
            id: 2,
            name:'Projects',
            experiences: [
                {
                    eid: 0,
                    place: "WeMeet" ,
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "Awards",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Project",
                            public: false ,
                            verified: "pdf" 
                        } 
                    ]
  
                },
                {   
                    eid: 1,
                    place: "PokemonGo",
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "Awards",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Project",
                            public: false ,
                            verified: "pdf" 
                        } 
                    ]
                },
                
                {
                    eid: 2,
                    place: "MySecondHome.com" ,
                    verifiable_elements: [
                        {
                            elemID: 0,
                            tag: "Awards",
                            public: true ,
                            verified: "image" 
                        } ,
                        {
                            elemID: 1,
                            tag: "Project",
                            public: false ,
                            verified: "pdf" 
                        } 
                    ]
                }
            ]
        }
    ];