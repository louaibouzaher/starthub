export default function Heart({ isClicked, className }) {
  return (
    <div className={'cursor-pointer ' + className}>
      {isClicked ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
            fill="#FF5B83"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
            fill="#7B8699"
          />
        </svg>
      )}
    </div>
  )
}
