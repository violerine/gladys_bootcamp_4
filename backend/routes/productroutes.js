const express = require("express");
const Product = require("../models/product");
const router = express.Router();



router.get("/:id", (req, res) => {
    
    Product.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});


//coding yg ini buat search all langsung keluar semua
router.get("/", (req, res) => {

    Product.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});


router.get("/hellokitty", (req, res) => {
    
    Product.find(req.body.variant, (error, result) => {
        if(req.body.variant =="hellokitty" ){
            res.json(result);
        }
        else{
            
        }
    });

});




router.post("/post", (req, res) => {
    
    
    if (!req.files.image) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.image;
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/productdetail" + imageName, (error) => {
        
        if (error) return res.status(500).send(error);
        
        let newObj = new Product({
            name : req.body.name,
            description : req.body.description,
            variant : req.body.variant,
            price : req.body.price,
            color : req.body.color,
            image : "http://localhost:7000/productdetail" + imageName
        });
        
        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newObj);
            }
        });

    });

});

module.exports = (function(){
    return router;
})();