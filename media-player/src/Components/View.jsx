import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';
import { getAllVideoAPI, getCategoryAPI, updateCtegoryAPI } from '../services/allAPI';

function View({ uploadVideoResponse, setDropVideoResponse }) {
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false);
  const [allVideos, setAllVideos] = useState([]);

  const getAllVideos = async () => {
    const result = await getAllVideoAPI();
    console.log(result);
    if (result.status === 200) {
      setAllVideos(result.data);
    } else {
      console.log('API failed');
      setAllVideos([]);
    }
  };

  console.log(allVideos);

  useEffect(() => {
    getAllVideos();
    setDeleteVideoResponse(false);
  }, [uploadVideoResponse, deleteVideoResponse]);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDropped = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData('data'));
    const { data } = await getCategoryAPI();
    const selectedCategory = data.find((item) => item.id === categoryId);
    let result = selectedCategory.allVideos.filter((video) => video.id !== videoId);
    let { id, categoryName } = selectedCategory;
    let newCategory = { id, categoryName, allVideos: result };
    const res = await updateCtegoryAPI(categoryId, newCategory);
    setDropVideoResponse(res);
  };

  return (
    <>
      <h2 className='text-info'>All-Videos</h2>
      <Row droppable="true" onDragOver={dragOver} onDrop={videoDropped}>
        {allVideos?.length > 0 ? (
          allVideos.map((video, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
            </Col>
          ))
        ) : (
          <p className='text-danger'>Nothing to Display</p>
        )}
      </Row>
    </>
  );
}

export default View;
