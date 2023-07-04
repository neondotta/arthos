import { Avatar, Button } from "@all-for-art/react";
import Carousel from "react-multi-carousel";
import Image from "next/image";

import { ButtonWrapper, Container, DataUser, Infos, TextWrapper, WrapContainer } from "./styles";
import "react-multi-carousel/lib/styles.css";

import neon from '../../assets/Neon.png'
import Teste from '../../assets/Teste.png'

export function CarouselAdapter() {
    return(
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carrousel-slider--item"
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass="carrousel-slider"
            slidesToSlide={1}
            swipeable
        >
            <Container>
                <WrapContainer>
                    <DataUser>
                        <div className="infoUser">
                            <Avatar width={30} height={30} />
                            
                            <Infos>
                                <div className="user">
                                    <div className="name">Tste</div>
                                    <div className="type-artist">Múico</div>
                                </div>
                                <div className="info-date">10/10/2023 - 16:00:00</div>
                            </Infos>
                        </div>
                        
                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Seguir
                        </Button>
                    </DataUser>
                </WrapContainer>
                
                <Image
                    src={Teste}
                    className="carousel--image-main"
                    alt="teste"
                />
                
                <WrapContainer>
                    <TextWrapper>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio reprehenderit delectus dolores aperiam, necessitatibus dolor quae quibusdam praesentium fugiat quo quasi inventore impedit eligendi voluptatibus ducimus repudiandae sed tempora!
                        </div>
                    </TextWrapper>
                </WrapContainer>

                <WrapContainer>
                    <ButtonWrapper>
                        <Button size="sm" variant="secondary">Teste</Button>
                        <Button size="sm" variant="secondary">Novo</Button>
                    </ButtonWrapper>
                </WrapContainer>
            </Container>
            
            <Container>
                <WrapContainer>
                    <DataUser>
                        <Avatar width={30} height={30} />
                        
                        <Infos>
                            <div className="user">
                                <div className="name">Tste</div>
                                <div className="type-artist">Múico</div>
                            </div>
                            <div className="info-date">10/10/2023 - 16:00:00</div>
                        </Infos>

                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Seguir
                        </Button>
                    </DataUser>
                </WrapContainer>
                
                <Image
                    src={Teste}
                    className="carousel--image-main"
                    alt="teste"
                />
                
                <WrapContainer>
                    <TextWrapper>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio reprehenderit delectus dolores aperiam, necessitatibus dolor quae quibusdam praesentium fugiat quo quasi inventore impedit eligendi voluptatibus ducimus repudiandae sed tempora!
                        </div>
                    </TextWrapper>
                </WrapContainer>

                <WrapContainer>
                    <ButtonWrapper>
                        <Button size="sm" variant="secondary">Teste</Button>
                        <Button size="sm" variant="secondary">Novo</Button>
                    </ButtonWrapper>
                </WrapContainer>
            </Container>

            <Container>
                <WrapContainer>
                    <DataUser>
                        <Avatar width={30} height={30} />
                        
                        <Infos>
                            <div className="user">
                                <div className="name">Tste</div>
                                <div className="type-artist">Múico</div>
                            </div>
                            <div className="info-date">10/10/2023 - 16:00:00</div>
                        </Infos>

                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Seguir
                        </Button>
                    </DataUser>
                </WrapContainer>
                
                <Image
                    src={Teste}
                    className="carousel--image-main"
                    alt="teste"
                />
                
                <WrapContainer>
                    <TextWrapper>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio reprehenderit delectus dolores aperiam, necessitatibus dolor quae quibusdam praesentium fugiat quo quasi inventore impedit eligendi voluptatibus ducimus repudiandae sed tempora!
                        </div>
                    </TextWrapper>
                </WrapContainer>

                <WrapContainer>
                    <ButtonWrapper>
                        <Button size="sm" variant="secondary">Teste</Button>
                        <Button size="sm" variant="secondary">Novo</Button>
                    </ButtonWrapper>
                </WrapContainer>
            </Container>

            <Container>
                <WrapContainer>
                    <DataUser>
                        <Avatar width={30} height={30} />
                        
                        <Infos>
                            <div className="user">
                                <div className="name">Tste</div>
                                <div className="type-artist">Múico</div>
                            </div>
                            <div className="info-date">10/10/2023 - 16:00:00</div>
                        </Infos>

                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Seguir
                        </Button>
                    </DataUser>
                </WrapContainer>
                
                <Image
                    src={Teste}
                    className="carousel--image-main"
                    alt="teste"
                />
                
                <WrapContainer>
                    <TextWrapper>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio reprehenderit delectus dolores aperiam, necessitatibus dolor quae quibusdam praesentium fugiat quo quasi inventore impedit eligendi voluptatibus ducimus repudiandae sed tempora!
                        </div>
                    </TextWrapper>
                </WrapContainer>

                <WrapContainer>
                    <ButtonWrapper>
                        <Button size="sm" variant="secondary">Teste</Button>
                        <Button size="sm" variant="secondary">Novo</Button>
                    </ButtonWrapper>
                </WrapContainer>
            </Container>

            <Container>
                <WrapContainer>
                    <DataUser>
                        <Avatar width={30} height={30} />
                        
                        <Infos>
                            <div className="user">
                                <div className="name">Tste</div>
                                <div className="type-artist">Múico</div>
                            </div>
                            <div className="info-date">10/10/2023 - 16:00:00</div>
                        </Infos>

                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Seguir
                        </Button>
                    </DataUser>
                </WrapContainer>
                
                <Image
                    src={Teste}
                    className="carousel--image-main"
                    alt="teste"
                />
                
                <WrapContainer>
                    <TextWrapper>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio reprehenderit delectus dolores aperiam, necessitatibus dolor quae quibusdam praesentium fugiat quo quasi inventore impedit eligendi voluptatibus ducimus repudiandae sed tempora!
                        </div>
                    </TextWrapper>
                </WrapContainer>

                <WrapContainer>
                    <ButtonWrapper>
                        <Button size="sm" variant="secondary">Teste</Button>
                        <Button size="sm" variant="secondary">Novo</Button>
                    </ButtonWrapper>
                </WrapContainer>
            </Container>
        </Carousel>
    )
}