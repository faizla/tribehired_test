const axios = require('axios');
exports.getQuestion1 = (req, res, next) => {
    let listComment = [];
    let postId_Comment;
    axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((comments) => {
            //destructuring array and stored in new variable
            listComment = [...comments.data];
            //count the number of comment for each postId
            const listOfPostIds = listComment.reduce((listofpostid, comment) => {
                const element = comment.postId;

                listofpostid[element] = (listofpostid[element] || 0) + 1; //if null assign to 0 if have value +1
                return listofpostid;
            }, {})
            postId_Comment = Object.keys(listOfPostIds).map(key => ({ postId: +key, count: listOfPostIds[key] }));
            return postId_Comment;
        })
        .then(() => {
            return axios.get("https://jsonplaceholder.typicode.com/posts");
        })
        .then((response) => {
            listPost = [...response.data];
            return listPost.map((post) => {
                const obj = postId_Comment.find((res) => res.postId === post.id);
                const total_number_of_comments = obj.count;
                return { ...post, total_number_of_comments };
            })
        })
        .then((full) => {
            //descending order, but every post have the same number of comment?
            full.sort((a, b) => b.total_number_of_comments - a.total_number_of_comments);
            full = full.map(f => {
                return {
                    post_id: f.id,
                    post_title: f.title,
                    post_body: f.body,
                    total_number_of_comments: f.total_number_of_comments,
                }
            });
            // res.setHeader('Content-Type', 'application/json')
            res.status(200).json(full);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });


}


exports.getQuestion2 = (req, res, next) => {
    console.log(Object.keys(req.query));
    const search = req.query[Object.keys(req.query)[1]]; //body
    axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((comments) => {

            //destructuring array and stored in new variables
            let listOfCommments = [...comments.data]
            //looping each search_params
            for (let x of Object.keys(req.query)) { //[ 'postId', 'body', 'email', 'id', 'name' ] the order of the params is not important
                console.log("search_params: ", x);

                //boleh gune .filter() but for this use case .reduce() pun okey
                listOfCommments = listOfCommments.reduce((matchedComment, comment) => {
                    //string matching
                    if (comment[x].toString().includes(req.query[x])) {
                        //check kalau search value tu int
                        if (+req.query[x]) {
                            //kalau int macam postId and Id guna "=="
                            if (+req.query[x] == comment[x]) {
                                matchedComment.push(comment);
                            }
                        }
                        else {
                            matchedComment.push(comment);
                        }
                    }
                    return matchedComment;
                }, []);
            }
            // console.log(searchedCommment.length);
            //kalau xde matched return this value
            if (listOfCommments.length <= 0) {
                return res.status(200).json({ messages: "Post Not Exist" });
            }
            res.status(200).json(listOfCommments);
        })
        .catch((error) => {
            console.log(error);
        });
}