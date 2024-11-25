import { Editor } from "@tinymce/tinymce-react";
const TextEditor = () => {
  return (
    <div>
      <Editor
        apiKey="7g92aw8iy54qdzbia8jnr6kh026gp544wro86e4f0guu0gw8"
        init={{
          height: 300, // 에디터 높이
          menubar: false, // 상단 메뉴바 비활성화
          plugins: [
            "advlist", // 고급 목록 스타일
            "lists", // 목록
            "formatpainter", // 텍스트 형식 복사
          ],
          toolbar:
            "undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | fontsizeselect", // 글자 관련 도구들만 표시
          font_size_formats: "10pt 12pt 14pt 18pt 24pt 36pt", // 선택 가능한 글자 크기
        }}
        initialValue="<p>이곳에 텍스트를 입력하세요.</p>" // 초기 텍스트
      />
    </div>
  );
};
export default TextEditor;
