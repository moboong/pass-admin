package com.example.demo.mapper;
 
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.SysMasVO;
 
@Mapper
public interface SysMasMapper {
	
	//Map
	List<Map<String, Object>> SMList(Map<String, Object> parameter);
	Map<String, Object> fetchSMBySYS_ID(Map<String, Object> parameter);
	
    //VO
	//List<SysMasVO> SMList();
	//SysMasVO fetchSMBySYS_ID(int sysId);	
    void insertSM(SysMasVO pamVO);
    void updateSM(SysMasVO pamVO);
    void deleteSM(int sysId);
    
}