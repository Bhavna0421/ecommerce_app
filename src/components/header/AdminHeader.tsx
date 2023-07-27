import Link from "next/link";

export default function AdminHeader() {
  return (
    <header
      style={{
        height: "75px",
        backgroundColor: "black",
        position: "sticky",
        top: -1,
        zIndex: 100,
        marginLeft: "-8px",
        marginRight: "-8px",
      }}
    >
      <div
        style={{
          marginLeft: "100px",
          display: "flex",
          columnGap: "3rem",
          alignItems: "flex-end",
          marginTop: "-10px",
        }}
      >
        <div
          style={{
            marginLeft: "-60px",
            display: "flex",
            columnGap: "3rem",
            alignItems: "flex-end",
            marginTop: "33px",
          }}
        >
          <Link
            href="/adminpage"
            style={{
              textDecoration: "none",
              color: "white",
              fontStyle: "normal",
            }}
          >
            Home
          </Link>
          <Link
            href="/adminwishlistpage"
            style={{
              textDecoration: "none",
              color: "white",
              fontStyle: "normal",
            }}
          >
            Wishlist
          </Link>
        </div>
        {/* <IconButton
          title="open wishlist"
          edge="start"
          aria-label="open drawer"
          onClick={oncartClick}
          style={{ marginTop: "14px" }}
        >
          <Badge badgeContent={whishlist?.length} color="error">
            <FavoriteBorderIcon style={{ color: "white" }} />
          </Badge>
        </IconButton> */}
      </div>
    </header>
  );
}
