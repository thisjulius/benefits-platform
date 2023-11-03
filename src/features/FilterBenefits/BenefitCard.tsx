import styled from "styled-components"

type Benefit = {
    id: number
    title: string
    description: string
    likes: number
}

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

const BenefitCard = ({ benefit }: { benefit: Benefit })  => {
  return (
    <Card>
      <Title>{benefit.title}</Title>
      <Description>{benefit.description}</Description>
      <Likes>{benefit.likes}</Likes>
    </Card>
  );
}

export default BenefitCard;