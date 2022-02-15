package com.example.demo.mapper;
 
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.PassAplyMasVO;
 
@Mapper
public interface PassAplyMasMapper {
	
	//Map
	List<Map<String, Object>> PAMList(Map<String, Object> parameter);
	Map<String, Object> fetchPAMByAPLY_SEQ(Map<String, Object> parameter);
	
    //VO
	//List<PassAplyMasVO> PAMList();
	//PassAplyMasVO fetchPAMByAPLY_SEQ(int aplySeq);	
    void insertPAM(PassAplyMasVO pamVO);
    void updatePAM(PassAplyMasVO pamVO);
    void deletePAM(int aplySeq);
    
}