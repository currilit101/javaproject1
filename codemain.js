async function dBinary(str) {
    var newBin = str.split(" ")
    var binCode = []
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
      }
    return binCode.join("")
    }

//not now
         }
	try{
        await mongoose.connect(mongodb);
	} catch {
		console.log('Could not connect with Mongodb.\nPlease visit https://github.com/naveeddogar/KING-MD')
	}
    }

    return amount;
  }else if(type === 2){
    const dare_questions = [dare_normal_questions, more_normal_dare_questions, dirty_dare_questions_part_1, dirty_dare_questions_part_2];
    let amount = 0;
    for(const question_pack of dare_questions){
      amount += question_pack.length;
    }
    return amount;
  }else return null;
}
