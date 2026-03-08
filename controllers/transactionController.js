const Transaction = require("../models/Transaction");

exports.createTransaction = async(req,res)=>{
  const transaction = await Transaction.create({
    userId:req.user.id,
    ...req.body
  });

  res.json(transaction);
};

exports.getTransactions = async(req,res)=>{
  const data = await Transaction.find({userId:req.user.id});
  res.json(data);
};

exports.updateTransaction = async(req,res)=>{
  const updated = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(updated);
};

exports.deleteTransaction = async(req,res)=>{
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
};