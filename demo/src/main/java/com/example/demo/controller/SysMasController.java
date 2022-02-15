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

import com.example.demo.mapper.SysMasMapper;
import com.example.demo.vo.SysMasVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/sysMas")
public class SysMasController {
 
    @Autowired
    SysMasMapper SMMapper;
    
    //Map 사용
    @GetMapping
    public List<Map<String, Object>> SMList(){
    	Map<String, Object> parameter = new HashMap<>();
    	List<Map<String, Object>> list = SMMapper.SMList(parameter);
    	log.info("all records = {}", list);
        System.out.println("SM 리스트 출력 성공");
        return list;
    }
    
    @PostMapping("/some")
    public List<Map<String, Object>> SMListWithCondition(@RequestBody Map<String, Object> parameter){
    	System.out.println(parameter);
    	List<Map<String, Object>> list = SMMapper.SMList(parameter);
    	log.info("some records = {}", list);
        System.out.println("SM condition 리스트 출력 성공");
        return list;
    }
    
    @GetMapping("/one/{sysId}")
    public Map<String, Object> fetchSMBySYS_ID(@PathVariable Map<String, Object> parameter) {
    	System.out.println(parameter);
    	Map<String, Object> fetchSM = SMMapper.fetchSMBySYS_ID(parameter);
    	System.out.println(fetchSM);
        log.info("one record = {}", fetchSM);
        System.out.println("SM 한건 출력 성공");
        return fetchSM;
    }
    
    
    //VO 사용 
    @PostMapping("/one")
    void insertSM(@RequestBody SysMasVO sm) {
    	SMMapper.insertSM(sm);
    	System.out.println("SM DB 저장 성공");
    }
        
    @PutMapping("/one/{sysId}")
    public void updateSM(@PathVariable int sysId, @RequestBody SysMasVO sm) {
        
    	SysMasVO updateSM = sm;
        
    	updateSM.setBizNm(sm.getBizNm());
    	updateSM.setSysNm(sm.getSysNm());
    	updateSM.setSysSt(sm.getSysSt());
    	updateSM.setPassPtnType(sm.getPassPtnType());
    	updateSM.setPassSize(sm.getPassSize());
    	updateSM.setQrUseYn(sm.getQrUseYn());
    	
        SMMapper.updateSM(updateSM);
        log.info("update = {}", updateSM);
        System.out.println("SM 수정 성공");
    }
    
    @DeleteMapping("/one/{sysId}")
    public void deleteSM(@PathVariable int sysId) {
    	SMMapper.deleteSM(sysId);
        System.out.println("SM 삭제, 성공적");
    }
    
}