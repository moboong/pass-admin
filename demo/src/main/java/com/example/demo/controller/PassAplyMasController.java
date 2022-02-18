package com.example.demo.controller;
 
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.PassAplyMasMapper;
import com.example.demo.vo.PassAplyMasVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/passAplyMas")
public class PassAplyMasController {
 
    @Autowired
    PassAplyMasMapper PAMMapper;
    
    //Map 사용
    @GetMapping
    public List<Map<String, Object>> PAMList(){
    	Map<String, Object> parameter = new HashMap<>();
    	List<Map<String, Object>> list = PAMMapper.PAMList(parameter);
    	log.info("all records = {}", list);
        System.out.println("PAM 리스트 출력 성공");
        return list;
    }
    
    @PostMapping("/some")
    public List<Map<String, Object>> PAMListWithCondition(@RequestBody Map<String, Object> parameter){
    	System.out.println("send from frontend" + parameter);
    	List<Map<String, Object>> list = PAMMapper.PAMList(parameter);
    	log.info("some records = {}", list);
        System.out.println("PAM condition 리스트 출력 성공");
        return list;
    }
    
    @GetMapping("/one/{aplySeq}")
    public Map<String, Object> fetchPAMByAPLY_SEQ(@PathVariable Map<String, Object> parameter) {
    	System.out.println(parameter);
    	Map<String, Object> fetchPAM = PAMMapper.fetchPAMByAPLY_SEQ(parameter);
    	System.out.println(fetchPAM);
        log.info("one record = {}", fetchPAM);
        System.out.println("PAM 한건 출력 성공");
        return fetchPAM;
    }
    
    
    //VO 사용 
    @PostMapping("/one")
    void insertPAM(@RequestBody PassAplyMasVO pam) {
    	PAMMapper.insertPAM(pam);
    	System.out.println("PAM DB 저장 성공");
    }
        
    @PutMapping("/one/{aplySeq}")
    public void updatePAM(@PathVariable int aplySeq, @RequestBody PassAplyMasVO pam) {
        
    	PassAplyMasVO updatePAM = pam;
        
        updatePAM.setSecKey(pam.getSecKey());
        updatePAM.setQrData(pam.getQrData());
        updatePAM.setPin(pam.getPin());
        updatePAM.setAuthYn(pam.getAuthYn());
        
        PAMMapper.updatePAM(updatePAM);
        log.info("update = {}", updatePAM);
        System.out.println("PAM 수정 성공");
    }
    
    @DeleteMapping("/one/{aplySeq}")
    public void deletePAM(@PathVariable int aplySeq) {
    	PAMMapper.deletePAM(aplySeq);
        System.out.println("PAM 삭제, 성공적");
    }
    
}