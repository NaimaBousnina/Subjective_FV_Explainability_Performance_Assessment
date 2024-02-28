<table><td align="center" width="9999">

  <h1 align="center"> Subjective Explainability Performance Assessment Protocol: Software Application </h1>
  This repository contains the source code and data of a software application used to validate the efficacy of a subjective explainability performance assessment protocol for visual explanations-based face verification explainability. The proposed protocol encompasses a set of key specifications designed to efficiently collect the subjects’ preferences and estimate explainability performance scores, facilitating the relative assessment of the explainability tools. This protocol aims to address the current gap in evaluating the effectiveness of visual explanation-based FV explain-ability tools, providing a structured approach for assessing their performance and comparing with alternative tools. 


  
</td></table>
<table>

 ## 1. Introduction

 They key idea behind the RISE-based FV explainability method (FV-RISE) is to generate Similarity Heat Maps (S-HMs) and Dissimilarity Heat Maps (D-HMs) to explain the FV decisions according to the type of decision  performed, notably acceptance or rejection, for both genuine and impostor verification attempts. More precisely, S-HMs and D-HMs are used to explain the acceptance and rejection cases, respectively, regardless of true or false FV decisions being performed. The FV-RISE method is inspired by the random-masking approach used by [RISE](https://arxiv.org/pdf/1806.07421.pdf) to explain object classification, with the novelty that FV-RISE applies that approach to the FV task. 

 ## 2. Requirements
- Install Python 3.x

     `$ sudo apt-get update` \
     `$ sudo apt-get install python3.x`
     
- Install cuda toolkit

     For cuda Toolkit instalation, please refer to [CUDA Toolkit Download](https://developer.nvidia.com/cuda-toolkit-archive).
  
- Install PyTorch >= 1.6
   
     For PyTorch installation, please refer to [PyTorch Installation](https://gitlab.eurecom.fr/xaiface_project/xaiface_private/xaiface_face_recognition_pipelines/-/blob/master/Face_processing_tools/Recognition/ArcFace/Pytorch_install.md?ref_type=heads).

- Install `tensorboard`, `easydict`, `sklearn`.

