# Mondaysally

## 💭Idea
먼데이샐리는 사내 복지 문화 관리 서비스 App

## ✨Slogan
"출근이 즐거워 :)"

## 🎯Target
젊은 층(20대 중후반 - 30대 초반)이 많은 스타트업 / 중소기업

## 🌟System
* 기업/직원등록 
* 출/퇴근
* 기프트 히스토리
* 기프트 샵
* 트윙클
* 마이페이지

### REST API
REST API의 기본 구성 원리를 준수하여 라우팅을 진행했습니다.

### Structure
- `config`: 환경설정 및 `src`에서 필요한 기능을 모듈화시켜 저장한 영역입니다. DB 로그인 정보, FCM 인증 정보, winston 로깅, FCM 메시지 전송 기능, 응답메시지, redis 접속 기능 등으로 구성되어 있습니다. 

- `src`: 메인 로직으로 기능별로 구성되어 있습니다.
-- * Clover: 앱 내에서 포인트로 사용되는 클로버 기능
-- * Common: 현재 앱의 버전정보 조회 및 firebase 디바이스 토큰 저장
-- * Gift: 기프트 관련 기능
-- * Home: 홈 화면 조회
-- * Twinkle: 트윙클 관련 기능
-- * User: 유저 정보 관련 기능
-- * Work: 출/퇴근 관련 기능

- `그 외`: crontab.sh 리눅스 스케줄러 크론탭을 사용한 자동퇴근 API 호출

### Process
- 도메인 폴더 구조
> Route - Controller - Provider/Service - DAO

- Route: Request에서 보낸 라우팅 처리
- Controller: Request를 처리하고 Response 해주는 곳. (Provider/Service에 넘겨주고 다시 받아온 결과값을 형식화), 형식적 Validation
- Provider/Service: 비즈니스 로직 처리, 의미적 Validation
- DAO: Data Access Object의 줄임말. Query가 작성되어 있는 곳.  

> `Request` -> Route -> Controller -> Service/Provider -> DAO -> DB -> DAO -> Service/Provider -> Controller -> Route -> `Response`
