import styled from "styled-components"


const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: calc(33% - 10px);
  margin-right: 10px;
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const Likes = styled.div`
  color: #999;
`;

const PostCard = ({ post })  => {
  return (
    <Card>
      <Title>{post.title}</Title>
      <Description>{post.userId}</Description>
      <Likes>{post.body}</Likes>
    </Card>
  );
}

export default PostCard;